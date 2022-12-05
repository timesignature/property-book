export default function InputComponent({title,type='text',error,...props}){
    return (
        <label>
            <span className="block text-sm mb-3">{title}</span>
            <input
                {...props}
                type={type}
                className={`input ${error ? 'border border-red-600' : 'border border-gray-200'}`}
            />
            {
                error && (
                    <span className="block mt-3 text-sm text-red-600">{error[0]}</span>
                )
            }
        </label>
    )
}