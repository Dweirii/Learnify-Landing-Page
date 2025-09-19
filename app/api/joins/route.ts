import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const joinSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = joinSchema.parse(body)

    // Here you would typically save to database or send to email service
    // For now, we'll just simulate a successful response
    console.log("New join request:", { name, email })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Successfully joined!", data: { name, email } }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
