'use client'
import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import convertToSubCurrency from '@/lib/ConvertToSubCurrency'
import { useRouter } from 'next/navigation'

const CheckoutPage = ({ amount, onSuccess }: { amount: number; onSuccess: () => void }) => {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const [errorMessage, setError] = useState<string>('')
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)
  const [paymentSuccessful, setPaymentSuccessful] = useState(false)

  useEffect(() => {
    fetch('/api/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(err => console.error('Error fetching client secret', err))
  }, [amount])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements || !clientSecret) return

    setLoading(true)

    // First validate form fields
    const { error: submitError } = await elements.submit()
    if (submitError) {
      setError(submitError.message || 'An unexpected error occurred.')
      setLoading(false)
      return
    }

    // Then confirm payment
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.href
      },
      redirect: 'if_required'
    })

    if (error) {
      setError(error.message || 'An unexpected error occurred.')
      setPaymentSuccessful(false)
    } else {
      setError('')
      setPaymentSuccessful(true)
      onSuccess() // Notify parent component
      // Redirect to thank-you page with user name and car name
      router.push(`/thank-you?userName=${encodeURIComponent('User Name')}&carName=${encodeURIComponent('Car Name')}`);
    }

    setLoading(false)
  }

  return (
    <div>
      {!paymentSuccessful ? (
        <form onSubmit={handleSubmit} className='p-8'>
          {clientSecret ? <PaymentElement /> : <p>Loading payment details…</p>}
          <button
            className='w-full bg-black text-white py-2 mt-5 disabled:bg-gray-400'
            type="submit"
            disabled={!clientSecret || loading}
          >
            {loading ? 'Processing…' : 'Pay Now'}
          </button>
          {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
        </form>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Thank you for your payment.</p>
            <button
              onClick={() => setPaymentSuccessful(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutPage