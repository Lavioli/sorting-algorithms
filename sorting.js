var swap = function(array, i, j) {
	var tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

var bubbleSort = function(array) {
	var swaps = 0;
	for (var i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			swap(array, i, i + 1);
			swaps++;
		}
	}

	if (swaps > 0) {
		return bubbleSort(array);
	}
	return array;
}


var arr = [9, 5, 15, 1];
var mergeSort = function(array) {
	console.log('======================')
	console.log('\ncurrent array: ', array)
	if (array.length <= 1) {
		console.log('array.length <= 1 is true');
		return array;
	}

	var middle = Math.floor(array.length / 2);
	var left = array.slice(0, middle);
	var right = array.slice(middle, array.length);

	console.log('middle: ', middle, 'left: ', left, 'right: ', right);

	left = mergeSort(left);
	right = mergeSort(right);
	console.log('left = mergeSort(left): ', left, 'right = mergeSort(right): ', right);

	console.log('MERGE: ============');
	return merge(left, right, array);
}

var merge = function(left, right, array) {
	console.log('we are in the merge function now');
	console.log('left: ', left, 'right', right, 'array: ', array);

	var leftIndex = 0;
	var rightIndex = 0;
	var outputIndex = 0;

	console.log('leftIndex: ', leftIndex, 'rightIndex: ', rightIndex, 'outputIndex: ', outputIndex);

	while (leftIndex < left.length && rightIndex < right.length) {
		console.log('while loop leftIndex < left.length && rightIndex < right.length are true\n');

		if(left[leftIndex] < right[rightIndex]) {
			
			console.log('left[leftIndex] < right[rightIndex] is true\n');
			array[outputIndex++] = left[leftIndex++];

			console.log('array: ', array, 'left: ', left);

		}
		else {
			console.log('left[leftIndex] < right[rightIndex] is false');
			array[outputIndex++] = right[rightIndex++];
			console.log('array: ', array, 'right: ', right);
		}

		console.log('=====END OF WHILE LOOP=======');
	}

	for (var i = leftIndex; i<left.length; i++) {
		console.log('for loop left i:', i)
		console.log('array BEFORE: ', array, 'left: ', left, 'left[i]', left[i]);
		array[outputIndex++] = left[i];
		console.log('array AFTER: ', array, 'left: ', left);
		console.log('=====END OF LEFT FOR LOOP=======');
	}

	for (var i = rightIndex; i<right.length; i++) {
		console.log('for loop right i:', i)
		console.log('array BEFORE: ', array, 'right: ', right, 'right[i]', right[i]);
		array[outputIndex++] = right[i];
		console.log('array AFTER: ', array, 'right: ', right);
		console.log('=====END OF RIGHT FOR LOOP=======');
	}

	console.log('return array: ', array);
	return array;
}

mergeSort(arr);


var quickSort = function(array, start, end) {
	start = start === undefined ? 0 : start;
	end = end === undefined ? array.length : end;
	if (start >= end) {
		return array;
	}

	var middle = partition(array, start, end);
	array = quickSort(array, start, middle);
	array = quickSort(array, middle + 1, end);
	return array;
}

var partition = function(array, start, end) {
	var pivot = array[end - 1];
	var j = start;
	for (var i = start; i < end -1; i++) {
		if (array[i] <= pivot) {
			swap(array, i, j);
			j++;
		}
	}
	swap(array, end-1, j);
	return j;
}

