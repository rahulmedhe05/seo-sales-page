"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

interface WhatsAppFormContextType {
  isOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const WhatsAppFormContext = createContext<WhatsAppFormContextType | undefined>(undefined)

export function WhatsAppFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openForm = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeForm = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <WhatsAppFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </WhatsAppFormContext.Provider>
  )
}

export function useWhatsAppForm() {
  const context = useContext(WhatsAppFormContext)
  if (context === undefined) {
    throw new Error("useWhatsAppForm must be used within a WhatsAppFormProvider")
  }
  return context
}
