const DEG360 = Math.PI * 2
const DEG45 = DEG360 / 4
const DEG15 = DEG360 / 12
const DEG6 = DEG360 / 60

let w = 600
let h = 600
let cx = w / 2
let cy = h / 2
let outer_radius = 250
let dial_pad = 40
let dial_longdash = 40
let dial_shortdash = 10
let text_pad = 30

let canvas_ids = []
let ctx = {}

function main() {
	register_canvas("dial")
	register_canvas("hours")
	register_canvas("minutes")

	register_ctxs()
	
	dial()
	hours()
	minutes()
}

function register_canvas (canvas_id) {
	document.querySelector('body').innerHTML += `<canvas id="${canvas_id}"></canvas>`
	canvas_ids.push(canvas_id)
}

function register_ctxs() {
	for (let canvas_id of canvas_ids) {
		const canvas = document.querySelector(`#${canvas_id}`)
		canvas.width = w
		canvas.height = h
		ctx[canvas_id] = canvas.getContext('2d')
	}
}

function daysInMonth () {
	let year = new Date().getFullYear()
	let month = new Date().getMonth()
  return new Date(year, month, 0).getDate();
}

window.onload = main
