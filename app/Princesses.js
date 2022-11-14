import Link from 'next/link'
import classes from '../styles/Princesses.module.css'

function Princess({ princess }) {
    const { name, backgroundColor, hair, eyes } = princess
    return (
        <div className={classes['princess-card']}>
            <Link href={`/${name}`}>
                <div className={classes['header']}>
                    <h1>{name}</h1>
                    <h1>110 HP</h1>
                </div>
                <svg
                    className={classes['card-icon']}
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                        cx="72"
                        cy="72"
                        r="72"
                        fill={backgroundColor.string}
                    />
                    {hair.style === 'long' && (
                        <path
                            d="M101 20.5C90.2608 11.3998 84.239 11.0219 73.5 20.5C59.4101 10.1351 52.9692 10.7545 44 23C33.4823 44.2191 33.0054 58.1881 34.5 84C32.7183 84.8461 31.8057 84.6051 30.5 81.5C30.8226 85.7261 32.3676 87.2511 37.5 88.5H110C113.772 86.6282 114.146 84.1934 115 80C110.725 84.6331 109.226 85.0774 109 80C110.604 57.0581 109.808 44.09 101 20.5Z"
                            fill={hair.color.string}
                            stroke="black"
                        />
                    )}
                    <ellipse cx="73" cy="55" rx="25" ry="30" fill="#53D8F5" />
                    <path
                        d="M72.4727 70.2176C72.4727 70.2176 81.159 73.5313 84.4727 70.2176C85.5628 69.1276 85.9357 67.889 85.9453 66.7176H59.0002C59.0098 67.889 59.3827 69.1276 60.4728 70.2176C63.7865 73.5313 72.4727 70.2176 72.4727 70.2176Z"
                        // lower lip
                        fill="#C612E3"
                        stroke="black"
                    />
                    <path
                        d="M72.4728 64.7176C68.4728 58.2176 60.4728 62.2176 60.4728 62.2176C60.4728 62.2176 58.9806 64.3279 59.0002 66.7176H85.9453C85.965 64.3279 84.4728 62.2176 84.4728 62.2176C84.4728 62.2176 76.4728 58.2176 72.4728 64.7176Z"
                        // upper lip
                        fill="#F41515"
                        stroke="black"
                    />
                    <circle cx="60" cy="44" r="6" fill={eyes.right.string} />
                    <circle cx="84" cy="44" r="6" fill={eyes.left.string} />
                    <path
                        d="M59 42.5C59 43.3284 58.3284 44 57.5 44C56.6716 44 56 43.3284 56 42.5C56 41.6716 56.6716 41 57.5 41C58.3284 41 59 41.6716 59 42.5Z"
                        // left pupil
                        fill="black"
                    />
                    <path
                        d="M88 42.5C88 43.3284 87.3284 44 86.5 44C85.6716 44 85 43.3284 85 42.5C85 41.6716 85.6716 41 86.5 41C87.3284 41 88 41.6716 88 42.5Z"
                        // right pupil
                        fill="black"
                    />
                    <path
                        d="M107 121C107 142.539 91.7777 138 73 138C54.2223 138 39 142.539 39 121C39 99.4609 54.2223 82 73 82C91.7777 82 107 99.4609 107 121Z"
                        // body
                        fill="#701717"
                    />
                    {hair.style === 'long' ||
                        (hair.style === 'bangs' && (
                            <>
                                <path
                                    d="M65.5 26.5C65.5 26.5 66.0472 25.8533 67.1807 25.7681C76.8398 21.9021 83.621 25.4031 96.5 40C101.25 45.8357 102.174 51.2751 101 64.5C101 64.5 95.5 71 83.25 45.5C74.8638 28.043 69.6411 25.5832 67.1807 25.7681C66.6304 25.9884 66.0707 26.2326 65.5 26.5Z"
                                    fill={hair.color.string}
                                />
                                <path
                                    d="M65.5 26.5C65.5 26.5 71 20 83.25 45.5C95.5 71 101 64.5 101 64.5C102.174 51.2751 101.25 45.8357 96.5 40C82.8872 24.5714 76.0869 21.5392 65.5 26.5Z"
                                    stroke="black"
                                />
                            </>
                        ))}
                    {hair.style === 'long' && (
                        <>
                            <path
                                d="M65.5 26.5C65.5 26.5 66.0472 25.8533 67.1807 25.7681C76.8398 21.9021 83.621 25.4031 96.5 40C101.25 45.8357 102.174 51.2751 101 64.5C101 64.5 95.5 71 83.25 45.5C74.8638 28.043 69.6411 25.5832 67.1807 25.7681C66.6304 25.9884 66.0707 26.2326 65.5 26.5Z"
                                fill={hair.color.string}
                            />
                            <path
                                d="M65.5 26.5C65.5 26.5 71 20 83.25 45.5C95.5 71 101 64.5 101 64.5C102.174 51.2751 101.25 45.8357 96.5 40C82.8872 24.5714 76.0869 21.5392 65.5 26.5Z"
                                stroke="black"
                            />
                        </>
                    )}
                    {hair.style === 'bangs' && (
                        <>
                            <path
                                d="M65.5 26.5C65.5 26.5 66.0472 25.8533 67.1807 25.7681C76.8398 21.9021 83.621 25.4031 96.5 40C101.25 45.8357 102.174 51.2751 101 64.5C101 64.5 95.5 71 83.25 45.5C74.8638 28.043 69.6411 25.5832 67.1807 25.7681C66.6304 25.9884 66.0707 26.2326 65.5 26.5Z"
                                fill={hair.color.string}
                            />
                            <path
                                d="M65.5 26.5C65.5 26.5 71 20 83.25 45.5C95.5 71 101 64.5 101 64.5C102.174 51.2751 101.25 45.8357 96.5 40C82.8872 24.5714 76.0869 21.5392 65.5 26.5Z"
                                stroke="black"
                            />
                        </>
                    )}
                    {hair.style === 'short' && (
                        <>
                            <rect
                                x="67"
                                y="5"
                                width="12"
                                height="26"
                                fill={hair.color.string}
                            />
                        </>
                    )}
                </svg>
                <div className={classes['card-text']}>
                    <p>
                        <span>Lorem</span> Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Quia, inventore?
                    </p>
                    <p>
                        <span>Lorem</span> Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Quia, inventore?
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Princess
