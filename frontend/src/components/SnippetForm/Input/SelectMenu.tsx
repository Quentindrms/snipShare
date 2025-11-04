interface SelectMenuProps{
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function SelectMenu({onChange}:SelectMenuProps){

    return(
        <>
        <label htmlFor='select-menu' className="label">Visibilité du snippet</label>
        <select className="snippetVisibility" id="snippetVisibility" onChange={onChange}>
            <option value="">Choisir une Visibilité</option>
            <option value="1">Public</option>
            <option value="2">Restreint</option>
            <option value="3">Privé</option>
        </select>
        </>
    )
}

export default SelectMenu;