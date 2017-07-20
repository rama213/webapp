var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/categorytype/_create",
		"groups": [
			{
				"label": "wc.create.categorytype.title",
				"name": "createCategoryType",
				"fields": [
						{
							"name": "name",
							"jsonPath": "CategoryType.name",
							"label": "Category",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "",
							"label": "Description",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "",
							"label": "Active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": true,
							"default": true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	}
}

export default dat;
