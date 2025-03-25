import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  } catch (error) {
    console.error("Error updating session:", error);
    return NextResponse.next();
  }
};
