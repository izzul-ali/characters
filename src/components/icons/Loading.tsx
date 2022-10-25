import { SVGProps } from "react";

const Loading = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="80" height="80" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16m-1-4C2 6 6.39 2 11.806 2C16.209 2 19.76 4.335 21 8"></path><path d="m7 17l-4-1l-1 4M17 7l4 1l1-4"></path></g></svg>
    )
}

export default Loading