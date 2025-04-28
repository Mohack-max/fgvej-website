"use server"

import { v4 as uuidv4 } from "uuid"
import { query } from "@/lib/db"
import bcrypt from "bcryptjs"

interface RegisterData {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  entrepreneurType: string
}

export async function registerUser(userData: RegisterData) {
  try {
    const id = uuidv4()
    const { firstName, lastName, email, phone, password, entrepreneurType } = userData

    // Check if user already exists
    const existingUsers = await query("SELECT id FROM users WHERE email = ?", [email])
    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      return { success: false, message: "Un utilisateur avec cet email existe déjà" }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    await query(
      `INSERT INTO users (id, first_name, last_name, email, phone, password, entrepreneur_type) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, firstName, lastName, email, phone, hashedPassword, entrepreneurType],
    )

    return { success: true, message: "Inscription réussie" }
  } catch (error) {
    console.error("Error registering user:", error)
    return { success: false, message: "Une erreur est survenue lors de l'inscription" }
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const users = await query("SELECT id, password FROM users WHERE email = ?", [email])

    if (!Array.isArray(users) || users.length === 0) {
      return { success: false, message: "Email ou mot de passe incorrect" }
    }

    const user = users[0] as { id: string; password: string }
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return { success: false, message: "Email ou mot de passe incorrect" }
    }

    return { success: true, userId: user.id, message: "Connexion réussie" }
  } catch (error) {
    console.error("Error logging in:", error)
    return { success: false, message: "Une erreur est survenue lors de la connexion" }
  }
}
