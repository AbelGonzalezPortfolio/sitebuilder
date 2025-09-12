import Link from 'next/link'

export default function Header({ siteName }: { siteName: String }) {
    return <header className="navbar bg-base-100 shadow-sm">
        <Link href="/" className="btn btn-ghost text-xl">{siteName}</Link>
    </header>
}