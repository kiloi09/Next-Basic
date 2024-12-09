import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1 className="uppercase font-semibold mb-10">Home</h1>
      <Link href='/about' className="text-sm text-blue-500">About Page</Link>
    </div>
  )
}
export default HomePage