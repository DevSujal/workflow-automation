import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, email_addresses, first_name, image_url } = body?.data;

    const email = email_addresses[0].email_address;
    console.log(body);

    await db.user.upsert({
      where: { clerkId: id },
      update: { email, name: first_name, profileImage: image_url },
      create: {
        email,
        name: first_name || "",
        profileImage: image_url || "",
        clerkId: id,
      },
    });

    return new NextResponse("User created successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to create user", { status: 500 });
  }
}
