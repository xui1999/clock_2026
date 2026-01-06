function dial() {
	console.log('ue')
	ctx.dial.save()
	ctx.dial.translate(cx, cy)
	ctx.dial.rotate( - DEG45 )

	ctx.dial.lineWidth = 3
	
	ctx.dial.beginPath()
	ctx.dial.arc(0, 0, outer_radius, 0, DEG360)
	ctx.dial.stroke()

	for (let i = 0; i < 4; i++) {
		ctx.dial.rotate(DEG45)
		ctx.dial.beginPath()
		ctx.dial.moveTo(outer_radius - dial_pad, 0)
		ctx.dial.lineTo(outer_radius - dial_pad - dial_longdash, 0)
		ctx.dial.stroke()
	}

	for (let i = 0; i < 12; i++) {
		ctx.dial.rotate(DEG15)
		if (i % 3 == 2) continue;
		ctx.dial.beginPath()
		ctx.dial.moveTo(outer_radius - dial_pad, 0)
		ctx.dial.lineTo(outer_radius - dial_pad - dial_shortdash, 0)
		ctx.dial.stroke()
	}

	ctx.dial.font = "500 30px Arial"

	for (let i = 0; i < 12; i++) {
		ctx.dial.rotate(DEG15)
		ctx.dial.save()
			let text = `${ i + 1 }`
			let {width} = ctx.dial.measureText(text)
			let backup = - width / 2
			ctx.dial.translate(outer_radius - text_pad, 0)
			ctx.dial.rotate(DEG45)
			ctx.dial.translate(backup, 0)
			ctx.dial.fillText(text, 0, 0)
		ctx.dial.restore()
	}
	ctx.dial.restore()
}
