"use client"
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutPage from '@/app/components/CheckoutPage'
import convertToSubCurrency from '@/lib/ConvertToSubCurrency'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function StripePayment({ carPrice, onSuccess }: { 
  carPrice: number; 
  onSuccess: () => void 
}) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-center">Your Car Rental Total: ${carPrice}</h1>
      
      <Elements
        stripe={stripePromise}
        options={{
          mode: 'payment',
          amount: convertToSubCurrency(carPrice),
          currency: 'usd',
          appearance: {
            theme: 'stripe',
          }
        }}
      >
        <CheckoutPage amount={carPrice} onSuccess={onSuccess} />
      </Elements>
    </div>
  )
}