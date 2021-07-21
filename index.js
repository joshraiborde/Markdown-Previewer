function App() {
    const [text, setText] = React.useState("");

    return(
        <div className="text-center px-4">
            <h1 className="p-4">The Markdown Previewer!</h1>
            <textarea
                name="text"
                id="text"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea"
            ></textarea>
            <h3 className="mt-3">OUTPUT</h3>
            <Preview markdown={text} />
        </div>
    )

}
function Preview({ markdown }) {
    return <div> </div>
}

ReactDOM.render(<App />, document.getElementById("root") );