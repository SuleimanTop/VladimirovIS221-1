export default function Input({Value,onChange}) {
    return (
        <input onChange={onChange} className="inputMain" type="text" value={Value} placeholder="What’s on your mind right now?" />
    )
};
