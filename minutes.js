let minute_pointer_length = 120
let minute_pointer_color = "black"

function minutes() {
	draw_minute_pointer()
}

function minutes_pct () {
	let date = new Date
	let day = date.getDate()
	let days = daysInMonth()
	return day / days
}

function get_minute_angle() {
	return DEG360 * minutes_pct()
}

function draw_minute_pointer(angle) {
	ctx.minutes.save()
	ctx.minutes.strokeStyle = minute_pointer_color
	ctx.minutes.lineWidth = 3
	ctx.minutes.translate(cx, cy)
	ctx.minutes.rotate( - DEG45 )
	ctx.minutes.rotate( get_minute_angle() )
	ctx.minutes.beginPath()
	ctx.minutes.moveTo(0, 0)
	ctx.minutes.lineTo(minute_pointer_length, 0)
	ctx.minutes.stroke()
	ctx.minutes.restore()
}
