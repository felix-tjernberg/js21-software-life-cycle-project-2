// import Princess from '../Princess'
import Link from 'next/link'
function PrincessName(p) {
    return (
        <div>
            <p>{p.params.princessName}</p>
            <Link href={'/'}>Go back</Link>
        </div>
    )
}
export default PrincessName
