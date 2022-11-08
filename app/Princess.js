import Link from 'next/link'

import classes from '../styles/Home.module.css'
function Princess({ princess }) {
    // console.log(princess)
    const { name, backgroundColor } = princess
    return (
        <div className={classes.test}>
            <Link href={`/${name}`}>
                <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    {/* background */}
                    <circle
                        cx="72"
                        cy="72"
                        r="72"
                        fill={backgroundColor.string}
                    />
                    {/* body */}
                    <path
                        d="M107 121C107 142.539 91.7777 138 73 138C54.2223 138 39 142.539 39 121C39 99.4609 54.2223 82 73 82C91.7777 82 107 99.4609 107 121Z"
                        fill="#701717"
                    />
                    {/* head */}
                    <ellipse cx="73" cy="55" rx="25" ry="30" fill="#53D8F5" />
                    {/* lipDown */}
                    <path
                        d="M72.4728 70.2176C72.4728 70.2176 81.159 73.5313 84.4728 70.2176C85.5628 69.1276 85.9357 67.889 85.9453 66.7176H59.0002C59.0098 67.889 59.3827 69.1276 60.4728 70.2176C63.7865 73.5313 72.4728 70.2176 72.4728 70.2176Z"
                        fill="#C612E3"
                        stroke="black"
                    />
                    {/* lipUp */}
                    <path
                        d="M72.4728 64.7176C68.4728 58.2176 60.4728 62.2176 60.4728 62.2176C60.4728 62.2176 58.9806 64.3279 59.0002 66.7176H85.9453C85.965 64.3279 84.4728 62.2176 84.4728 62.2176C84.4728 62.2176 76.4728 58.2176 72.4728 64.7176Z"
                        fill="#F41515"
                        stroke="black"
                    />
                    {/* leftEye */}
                    <circle cx="60" cy="44" r="6" fill="#22E71E" />
                    <circle cx="84" cy="44" r="6" fill="#22E71E" />
                    <rect x="67" y="5" width="12" height="26" fill="#1628C6" />
                    <path
                        d="M59 42.5C59 43.3284 58.3284 44 57.5 44C56.6716 44 56 43.3284 56 42.5C56 41.6716 56.6716 41 57.5 41C58.3284 41 59 41.6716 59 42.5Z"
                        fill="black"
                    />
                    <path
                        d="M88 42.5C88 43.3284 87.3284 44 86.5 44C85.6716 44 85 43.3284 85 42.5C85 41.6716 85.6716 41 86.5 41C87.3284 41 88 41.6716 88 42.5Z"
                        fill="black"
                    />
                </svg>
                <p>{name}</p>
            </Link>
        </div>
    )
}

export default Princess
