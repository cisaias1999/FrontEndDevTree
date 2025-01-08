
type ErrorMessageProps = {
    message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {

    return (
        <span className="text-red-500 bg-red-300 w-full text-center rounded-sm">{message}</span>
    )
}