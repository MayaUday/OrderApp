function Dropdown(props) {
    return (
        <div class="input-group">
            <span class="input-group-text"><i class="fa-solid fa-list-ul"></i></span>
            <select id="category" class="form-select" value={props.value} onChange={props.onChange}>
                <option value="default">Choose a Table</option>
                <option value="Table 1">Table 1</option>
                <option value="Table 2">Table 2</option>
                <option value="Table 3">Table 3</option>
            </select>
        </div>
    );
}

export default Dropdown;