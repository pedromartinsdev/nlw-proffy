const Database = require('./database/db')
const { subjects, weekdays, getSubject } = require('./utils/format')

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query

  if(filters.subject || !filters.weekd)


  const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS (
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = classes.id
      AND class_schedule.weekday = ${filters.weekday}
      AND class_schedule.time_from <= ${filters.time_from}
      AND class_schedule.time_to > ${filters.time_to}
    )
  `
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  const isNotEmpty = Object.keys(data).length > 0

  if (isNotEmpty) {
    data.subject = getSubject(data.subject)

    proffys.push(data)

    return res.redirect("/study")
  }

  return res.render("give-classes.html", { weekdays, subjects })
}

module.exports = {
  pageLanding,
  pageStudy,
  pageGiveClasses
}