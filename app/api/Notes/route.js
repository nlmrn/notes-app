import Note from "@/app/(models)/Note";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const NoteData = body.formData;
    await Note.create(NoteData);

    return NextResponse.json({ message: "Note created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const notes = await Note.find();
    return NextResponse.json({ notes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
