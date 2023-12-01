import { Button } from "../button/Button";

export const Card = ({key, title, info, img,textColor, id})=> {
    return(
        <div key={key} className="flex items-center flex-col justify-start p-4 rounded-lg w- bg-secondary-100 w-[340px] shadow-lg">
            <div className="p-1 w-full">
                <img 
                src={img} 
                alt="Sena sede52"
                className="object-cover block rounded-lg h-[150px] w-full"
                />
                <h1 className={`relative left-2 bottom-10 text-2xl font-semibold shadow-2xl 
                ${textColor === 1 ? "text-gray-100" : "text-gray-600"}`}>{title}</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-gray-600 font-medium text-center">{info}</p>
                <div className="flex items-center gap-8">
                    <Button idElement={id} title={'Eliminar'}/>
                    <Button idElement={id} title={'Actualizar'} />
                </div>
            </div>
        </div>
    )
}

