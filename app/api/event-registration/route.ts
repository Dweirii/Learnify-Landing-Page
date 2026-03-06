import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { eventRegistrationSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = eventRegistrationSchema.parse(body)

    const existing = await prisma.eventRegistration.findFirst({
      where: { email: validatedData.email },
    })

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already registered for the event.",
        },
        { status: 400 }
      )
    }

    const registration = await prisma.eventRegistration.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        role: validatedData.role === "streamer" ? "STREAMER" : "VIEWER",
        streamerCategories: validatedData.role === "streamer" ? validatedData.streamerCategories || [] : [],
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: { id: registration.id },
        message: "You're registered! We'll contact you soon to confirm your spot.",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating event registration:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: (error as { message?: string }).message,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to register for the event. Please try again.",
      },
      { status: 500 }
    )
  }
}
