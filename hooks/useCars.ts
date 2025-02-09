'use client'

import { useState, useEffect } from "react"
import { getAllCars, get1CarById } from "@/lib/fetchCar"
import { CarTypes } from '@/types/carsTypes'

// Hook to fetch all cars
export const useAllCars = () => {
  const [cars, setCars] = useState<CarTypes[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      setLoading(true)
      const fetchedCars = await getAllCars()
      setCars(fetchedCars)
      setLoading(false)
    }

    fetchCars()
  }, [])

  return { cars, loading }
}

// Hook to fetch a single car by ID
export const useCarById = (id: string) => {
  const [car, setCar] = useState<CarTypes | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCar() {
      setLoading(true)
      const fetchedCar = await get1CarById(id)
      setCar(fetchedCar)
      setLoading(false)
    }

    fetchCar()
  }, [id])

  return { car, loading }
}

// Hook to fetch the first 12 cars
export const useFirst12Cars = (id: string) => {
  const [cars, setCars] = useState<CarTypes[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      setLoading(true)
      const fetchedCars = await get1CarById(id)
      setCars(fetchedCars)
      setLoading(false)
    }

    fetchCars()
  }, [id])

  return { cars, loading }
}

// Hook to fetch cars from index 12 to 15
export const useCars12To16 = (id: string) => {
  const [cars, setCars] = useState<CarTypes[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      setLoading(true)
      const fetchedCars = await get1CarById(id)
      setCars(fetchedCars)
      setLoading(false)
    }

    fetchCars()
  }, [id])

  return { cars, loading }
}
