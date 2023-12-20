import Link from "next/link"

const Header = ({title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-on-primary">{title}</h1>
            {linkHref && linkTitle ?
                <Link href={linkHref} className="md:text-xl text-md underline hover:text-on-accent text-on-primary transition all">{linkTitle}</Link>
                : null
            }
        </div>
    )
}
export default Header