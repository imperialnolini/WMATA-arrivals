// INITIALIZE WIDGET ----
const widget = new ListWidget()


// LIST OF DICTIONARIES FOR UPCOMING ARRIVALS ----
const req = new Request("https://api.wmata.com/StationPrediction.svc/json/GetPrediction/x") // x at end is the code for your stop
const loc_name = "*STOP NAME HERE*" //write this so location stack at end has location
req.headers = {"api_key": "y"} // y is your API key
const res = await req.loadJSON()
const trains = res["Trains"]
// console.log(trains)


// IF NO TRAINS RUNNING
if (trains.length == 0){
  const stack_zero = widget.addStack()
  stack_zero.addSpacer(50)
  stack_zero.addText("There are no trains in service.")
}


// ADD STACKS ----
// TRAIN ONE ----
if (trains.length >= 1){
// GET INFO
const trains_one = trains[0]
const trains_one_line = trains_one["Line"]
const trains_one_dest = trains_one["DestinationName"]
const trains_one_min = trains_one["Min"]

// ADD STACK
const stack_one = widget.addStack()

// LINE
stack_one.addSpacer(50)
let trains_one_line_box = stack_one.addText("■ ")
if (trains_one_line == "OR") {
  trains_one_line_box.textColor = Color.orange()
} else if (trains_one_line == "SV") {
  trains_one_line_box.textColor = Color.gray()
} else if (trains_one_line == "RD") {
  trains_one_line_box.textColor = Color.red()
} else if (trains_one_line == "BL") {
  trains_one_line_box.textColor = Color.blue()
} else if (trains_one_line == "YL") {
  trains_one_line_box.textColor = Color.yellow()
} else if (trains_one_line == "GR") {
  trains_one_line_box.textColor = Color.green()
} else {
  trains_one_line_box.textColor = Color.black()
}

// OTHER INFO
// stack_one.addText(trains_one_line)
stack_one.addText(trains_one_dest)
stack_one.addSpacer()
stack_one.addText(trains_one_min)
stack_one.addSpacer(50)
// stack_one.borderColor = Color.orange()
// stack_one.borderWidth = 2

}



// TRAIN TWO ----
if (trains.length >= 2){
// GET INFO
const trains_two = trains[1]
const trains_two_line = trains_two["Line"]
const trains_two_dest = trains_two["DestinationName"]
const trains_two_min = trains_two["Min"]

// ADD STACK
const stack_two = widget.addStack()

// LINE
stack_two.addSpacer(50)
let trains_two_line_box = stack_two.addText("■ ")
if (trains_two_line == "OR") {
  trains_two_line_box.textColor = Color.orange()
} else if (trains_two_line == "SV") {
  trains_two_line_box.textColor = Color.gray()
} else if (trains_two_line == "RD") {
  trains_two_line_box.textColor = Color.red()
} else if (trains_two_line == "BL") {
  trains_two_line_box.textColor = Color.blue()
} else if (trains_two_line == "YL") {
  trains_two_line_box.textColor = Color.yellow()
} else if (trains_two_line == "GR") {
  trains_two_line_box.textColor = Color.green()
} else {
  trains_two_line_box.textColor = Color.black()
}

// OTHER INFO
stack_two.addText(trains_two_dest)
stack_two.addSpacer()
stack_two.addText(trains_two_min)
stack_two.addSpacer(50)

}



// TRAIN THREE ----
if (trains.length >= 3){
// GET INFO
const trains_three = trains[2]
const trains_three_line = trains_three["Line"]
const trains_three_dest = trains_three["DestinationName"]
const trains_three_min = trains_three["Min"]

// ADD STACK
const stack_three = widget.addStack()

// LINE
stack_three.addSpacer(50)
let trains_three_line_box = stack_three.addText("■ ")
if (trains_three_line == "OR") {
  trains_three_line_box.textColor = Color.orange()
} else if (trains_three_line == "SV") {
  trains_three_line_box.textColor = Color.gray()
} else if (trains_three_line == "RD") {
  trains_three_line_box.textColor = Color.red()
} else if (trains_three_line == "BL") {
  trains_three_line_box.textColor = Color.blue()
} else if (trains_three_line == "YL") {
  trains_three_line_box.textColor = Color.yellow()
} else if (trains_three_line == "GR") {
  trains_three_line_box.textColor = Color.green()
} else {
  trains_three_line_box.textColor = Color.black()
}

// OTHER INFO
stack_three.addText(trains_three_dest)
stack_three.addSpacer()
stack_three.addText(trains_three_min)
stack_three.addSpacer(50)

}



// TRAIN FOUR ----
if (trains.length >= 4){
// GET INFO
const trains_four = trains[3]
const trains_four_line = trains_four["Line"]
const trains_four_dest = trains_four["DestinationName"]
const trains_four_min = trains_four["Min"]

// ADD STACK
const stack_four = widget.addStack()

// LINE
stack_four.addSpacer(50)
let trains_four_line_box = stack_four.addText("■ ")
if (trains_four_line == "OR") {
  trains_four_line_box.textColor = Color.orange()
} else if (trains_four_line == "SV") {
  trains_four_line_box.textColor = Color.gray()
} else if (trains_four_line == "RD") {
  trains_four_line_box.textColor = Color.red()
} else if (trains_four_line == "BL") {
  trains_four_line_box.textColor = Color.blue()
} else if (trains_four_line == "YL") {
  trains_four_line_box.textColor = Color.yellow()
} else if (trains_four_line == "GR") {
  trains_four_line_box.textColor = Color.green()
} else {
  trains_four_line_box.textColor = Color.black()
}

// OTHER INFO
stack_four.addText(trains_four_dest)
stack_four.addSpacer()
stack_four.addText(trains_four_min)
stack_four.addSpacer(50)

}



// TRAIN FIVE ----
if (trains.length >= 5){
// GET INFO
const trains_five = trains[4]
const trains_five_line = trains_five["Line"]
const trains_five_dest = trains_five["DestinationName"]
const trains_five_min = trains_five["Min"]

// ADD STACK
const stack_five = widget.addStack()

// LINE
stack_five.addSpacer(50)
let trains_five_line_box = stack_five.addText("■ ")
if (trains_five_line == "OR") {
  trains_five_line_box.textColor = Color.orange()
} else if (trains_five_line == "SV") {
  trains_five_line_box.textColor = Color.gray()
} else if (trains_five_line == "RD") {
  trains_five_line_box.textColor = Color.red()
} else if (trains_five_line == "BL") {
  trains_five_line_box.textColor = Color.blue()
} else if (trains_five_line == "YL") {
  trains_five_line_box.textColor = Color.yellow()
} else if (trains_five_line == "GR") {
  trains_five_line_box.textColor = Color.green()
} else {
  trains_five_line_box.textColor = Color.black()
}

// OTHER INFO
stack_five.addText(trains_five_dest)
stack_five.addSpacer()
stack_five.addText(trains_five_min)
stack_five.addSpacer(50)

}


// LOCATION ----
const stack_loc = widget.addStack()
const loc = widget.addText(loc_name)
loc.font = Font.systemFont(14)
loc.rightAlignText()


// ADD LAST REFRESH TIME ----
const stack_time = widget.addStack()
const t = new Date()
const m = t.getMonth() + 1
const d = t.getDate()
const y = t.getFullYear()
const h_raw = t.getHours()
const mi_raw = t.getMinutes()


// TWELVE HOUR CLOCK
if (h_raw == 0) {
  h = 12
} else if (h_raw > 12) {
  h = h_raw - 12
//   to have leading zero on hour, need to make above h_int = h_raw - 12
//   if (h_int < 10) {
//     h = "0" + h_int.toString()
//   } else {
//     h = h_int
//   }
} else {
  h = h_raw
}

// MINUTES UNDER TEN W LEADING ZEROS
if (mi_raw < 10) {
  mi = "0" + mi_raw.toString()
} else {
  mi = mi_raw
}

// AM OR PM
if (h_raw < 12) {
  ampm = "am"
} else {
  ampm = "pm"
}

const last_refresh_clean = m + "/" + d + "/" + y + " @ " + h + ":" + mi + ampm

// stack_time.addSpacer()
const last_refresh = widget.addText(last_refresh_clean)
last_refresh.font = Font.systemFont(14)
last_refresh.rightAlignText()


// REFRESH LATER ----
// Refresh at 7:02am next day
const tomorrow = new Date(t)
tomorrow.setDate(t.getDate() + 1)
tomorrow.setHours(7,1,0)
widget.refreshAfterDate = tomorrow
// I don’t think this fully works (seems to refres at 9:something am), but stops constant refreshing, so it's fine


// DONE ----
Script.setWidget(widget)
Script.complete()
