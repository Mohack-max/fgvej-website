"use server"

import { v4 as uuidv4 } from "uuid"
import { query } from "@/lib/db"

interface ProjectFormData {
  userId: string
  projectName: string
  category: string
  description: string
  impact: string
  fundingAmount: string
  timeline: string
}

export async function submitProject(formData: ProjectFormData) {
  try {
    const projectId = uuidv4()
    const { userId, projectName, category, description, impact, fundingAmount, timeline } = formData

    await query(
      `INSERT INTO projects (id, user_id, project_name, category, description, impact, funding_amount, timeline) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        projectId,
        userId,
        projectName,
        category,
        description,
        impact,
        Number.parseFloat(fundingAmount),
        Number.parseInt(timeline),
      ],
    )

    return { success: true, projectId, message: "Projet soumis avec succès" }
  } catch (error) {
    console.error("Error submitting project:", error)
    return { success: false, message: "Une erreur est survenue lors de la soumission du projet" }
  }
}

export async function saveProjectFile(
  projectId: string,
  fileData: {
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
  },
) {
  try {
    const fileId = uuidv4()
    const { fileName, fileType, fileSize, filePath } = fileData

    await query(
      `INSERT INTO project_files (id, project_id, file_name, file_type, file_size, file_path) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [fileId, projectId, fileName, fileType, fileSize, filePath],
    )

    return { success: true }
  } catch (error) {
    console.error("Error saving project file:", error)
    return { success: false }
  }
}
