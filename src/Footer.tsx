export function Footer(){
    return(
        <main className="w-full bottom-0 text-2xl">
            <div className="space-y-6 mx-6">  
                        <div className="space-y-2">
                            <p className="text-center text-sm text-[var(--text-color)]">
                                &copy; {new Date().getFullYear()} Edmilson António. All rights reserved
                            </p>
                        </div>
            </div>
        </main>
        
    )
}