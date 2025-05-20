// type Props = {
//     title: string;
//     description: string;
// }

type A = {
    title: string;
}

type B = {
    description: string;
}
type Props = A & B;

// interface Props {
//     title : string;
// }
//
// interface Props {
//   description: string;
// }

const ArrowFunctionalComponentWithPropsType = ({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center mt-12 text-xl font-bold">{title}</h1>;
            <p className="text-center text-gray-800">{description}</p>

        </>
    )
}

export default ArrowFunctionalComponentWithPropsType;