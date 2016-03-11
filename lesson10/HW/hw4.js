function pattern(n) {
	var output = "", i;
	if (n > 0) {
		var results = [];
		var line = Array(n).join(' ');

		for (i = 1; i <= n; i++) {
			line += (i % 10);
		}
		results.push(line);

		for(i=1;i<n;i++){
			results.push(results[i-1].substring(1) + ' ');
		}
		output= results.join('\n')
	}
	return output;
}


console.log(pattern(10));// 123\n 123 \n123  "

