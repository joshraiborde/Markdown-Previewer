

marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState("");

    return(
        <div className="text-center px-4">
            <h1 className="p-4">The Markdown Previewer!</h1>
            <div className="row">
            <div className="col-6">

            <h5 className="text-center text-white">ENTER MARKDOWN HERE:</h5>
            <textarea
                name="text"
                id="text"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea">
                </textarea>
            </div>
            <div className="col-6">

            <h5 className="mt-3">MARKDOWN TRANSFORMED:</h5>
            <Preview markdown={text} />
            </div>
            </div>
        </div>
    )

}
function Preview({ markdown }) {
    return <div

    dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer}),
    }}
    id="preview"
    ></div>
}

ReactDOM.render(<App />, document.getElementById("root") );