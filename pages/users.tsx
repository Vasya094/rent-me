import { useRouter } from 'next/router';
import {NextRouter} from "next/dist/shared/lib/router/router";
import Link from 'next/link';



export default function Users(props: any) {
    const { locales } = useRouter() as NextRouter

    return (
        <div>
            <span>Users Component</span>

    </div>
);
}

// export const getStaticProps = async (context: any) => {
//     return {
//         props: { context },
//     };
// };
