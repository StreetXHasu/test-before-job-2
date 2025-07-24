import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://api.icndb.com/categories');
    const data = await response.json();
    
    if (data.type === 'success') {
      return NextResponse.json(data.value);
    } else {
      return NextResponse.json(
        { error: 'Failed to fetch categories' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 