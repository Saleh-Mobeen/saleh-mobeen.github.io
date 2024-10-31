document.addEventListener('DOMContentLoaded', () => {
    fetch("https://api.github.com/users/saleh-mobeen/repos")
        .then(res => res.json())
        .then(data => {
            var delay = 0
            console.log(data);
            data.forEach(async repo => {

                if (!repo.name.includes(".github.io") && !repo.name.includes("pre")) {
                    delay += 0.1
                    console.log(delay, `--delay:${delay}s;`);
                    const url = `https://saleh-mobeen.github.io/${repo.name}/`
                    const project = document.createElement('div')
                    project.classList.add('project')
                    project.style = `--delay:${delay}s;`


                    const a = document.createElement('a')
                    a.href = url
                    a.target = '_blank'

                    const h1 = document.createElement('h1')
                    h1.textContent = repo.name

                    const p = document.createElement('p')
                    p.textContent = url

                    const copy = document.createElement('button')
                    copy.setAttribute('data-url', url)
                    copy.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>'
                    copy.onclick = (e) => {
                        console.log(e.target.getAttribute('data-url'));

                        navigator.clipboard.writeText(e.target.getAttribute('data-url'))
                    }



                    a.appendChild(h1)
                    a.appendChild(p)
                    project.appendChild(a)
                    project.appendChild(copy)


                    document.querySelector('main').appendChild(project)


                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve()
                        }, 1000)
                    })



                }
            });
        })
})