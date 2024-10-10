document.addEventListener('DOMContentLoaded', () => {
    fetch("https://api.github.com/users/saleh-mobeen/repos")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(repo => {
                if (!repo.name.includes(".github.io")) {
                    let a = document.createElement('a')
                    let url = `https://saleh-mobeen.github.io/${repo.name}/`
                    a.href = url
                    a.target = "_blank"
                    a.innerHTML = `
                    <div>
                        <h1>${repo.name}</h1>
                        <p>${url}</p>
                        </div>`

                    document.querySelector('main').appendChild(a)
                }
            });
        })
})