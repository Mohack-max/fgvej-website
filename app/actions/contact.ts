"use server"

import { v4 as uuidv4 } from "uuid"
import { query } from "@/lib/db"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const id = uuidv4()
    const { name, email, phone, subject, message } = formData

    await query(
      `INSERT INTO messages (id, name, email, phone, subject, message) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id, name, email, phone || null, subject, message],
    )

    return { success: true, message: "Message envoyé avec succès" }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, message: "Une erreur est survenue lors de l'envoi du message" }
  }
}
