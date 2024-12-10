import Link from "next/link"

type NavType = {
    name: string,
    href: string
}

const Navlinks: NavType[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Counter',
        href: '/counter'
    },
    {
        name: 'Tours',
        href: '/tours'
    },
    {
        name: 'Actions',
        href: '/actions'
    }
]

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto py-14" style={{
        display: "flex",
        columnGap: "20px",
        padding: "20px 0",
      }}>
        {
            Navlinks.map((item, index) => {
                return <Link key={index} href={item.href}>{item.name}</Link> 
            })
        }
    </nav>
  )
}
export default Navbar