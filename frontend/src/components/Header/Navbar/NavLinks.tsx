

export function NavLinks() {

    return (
        <>
            <a href="/browse-snippets" className="navigation-link">Parcourir les snippets</a>
            <a href="/favorite-snippets" className="navigation-link">Snippets favoris</a>
            <a href="/create-snippet" className="navigation-link">Créer un snippet</a>
            <a href="/manage-snippets" className="navigation-link">Gérer mes snippet</a>
            <a href="#" className="navigation-link">Mon compte</a>
        </>
    )
}

export default NavLinks;