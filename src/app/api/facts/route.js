// app/api/facts/route.js
export async function GET() {
  const facts = [
    {
      id: 1,
      title: "Lyon se réchauffe plus vite !",
      imageUrl: "/images/climat-1.jpg",  // Direct depuis /public
      description: "+2,4°C depuis 1960..."
    }
  ];
  
  return Response.json({ facts });
}