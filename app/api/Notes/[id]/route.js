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

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const noteData = body.formData;
    await Note.findByIdAndUpdate(id, {
      ...noteData,
    });

    return NextResponse.json({ message: "Note Updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: "Note Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
