let hour_pointer_length = 150
let hour_pointer_color = "black"

function hours() {
	draw_hour_pointer()
}

function get_hour_angle() {
	let date = new Date

	let month = date.getMonth()
	let hour_angle = month * DEG15
	let minute_angle = DEG15 * minutes_pct()

	return hour_angle + minute_angle
}

function draw_hour_pointer() {
	ctx.hours.save()
	ctx.hours.strokeStyle = hour_pointer_color
	ctx.hours.lineWidth = 3
	ctx.hours.translate(cx, cy)
	ctx.hours.rotate( - DEG45 )
	ctx.hours.rotate( get_hour_angle() )
	ctx.hours.beginPath()
	ctx.hours.moveTo(0, 0)
	ctx.hours.lineTo(hour_pointer_length, 0)
	ctx.hours.stroke()
	ctx.hours.restore()
}