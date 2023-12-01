export const Button =({title, idElement})=>{
    return(
        <button
          value={idElement}
          className={`px-4 py-2 rounded-lg text-gray-50 font-semibold bg-primary/80 hover:bg-primary hover:text-white transition-colors` } >
            {title}
        </button>
    )
}