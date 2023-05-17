{
  for(let i = 1; i <= 9; i++){
    let th = document.createElement(`th`)
    th.innerHTML = i
    document.querySelector(`.ex1 thead tr`).append(th)
  } //th
  for(let i = 1; i <= 8; i++){
    let tr = document.createElement(`tr`)
    tr.innerHTML = `
    <td colspan="${i}" class="orange"></td>
    <td colspan="${9-i}" class="yellow"></td>
    `
    document.querySelector(`.ex1 tbody`).append(tr)
  } //tr과 td
}

{
  for(let i = 1; i <= 9; i++){
    let th = document.createElement(`th`)
    th.innerHTML = i
    document.querySelector(`.ex2 thead tr`).append(th)
  }

  for(let i = 1; i <= 8; i++){
    let tr = document.createElement(`tr`)
    for(let j = 1; j <= i; j++){
      let td = document.createElement(`td`)
      td.classList.add(`orange`)
      tr.append(td)
    }
    for(let j = 1; j <= 9-i; j++){
      let td = document.createElement(`td`)
      td.classList.add(`yellow`)
      tr.append(td)
    }
    document.querySelector(`.ex2 tbody`).append(tr)
  }

}