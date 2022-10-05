const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="create a new fruit" foodGroup="fruits">
                <h1>New Page</h1>
                <form action="/logs" method="POST">

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />

                    <label htmlFor="entry">Entry:</label>
                    <input type="text" id="entry" name="entry" />

                    <label htmlFor="shipIsBroken">Ship is broken:</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />

                    <input type="submit" value="Create entry"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New