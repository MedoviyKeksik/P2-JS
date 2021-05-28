class DateDisplayFormatter {
    _day = '';
    _month = '';
    _year = '';

    constructor() {
        if (arguments.length == 0) {
            let tmp = new Date();
            this._day = '' + tmp.getDate();
            this._month = '' + tmp.getMonth();
            this._year = '' + tmp.getFullYear();
        } 
        if (arguments.length == 1) {
            let time = arguments[0];
            if (typeof(time) == "number") {
                let tmp = new Date(time);
                this._day = '' + tmp.getDate();
                this._month = '' + tmp.getMonth();
                this._year = '' + tmp.getFullYear();;
            } 
            if (typeof(time) == "string") {
                this.parseTime(time);   
            }
        }
        if (arguments.length == 2) {
            let time = arguments[0];
            let format = arguments[1];
            this.parseTime(time, format);
        }
        return this;
    }

    
    parseTime(time, format = 'DDMMYYYY') {
        this._day = '';
        this._month = '';
        this._year = '';
        for (let i = 0; i < format.length; i++) {
            if (format[i] === 'D') this._day += time[i];
            if (format[i] === 'M') this._month += time[i];
            if (format[i] === 'Y') this._year += time[i];
        }
        if (this._year.length === 2) this._year = '20' + this._year;
    }

    formatTime(format = 'DDMMYYYY') {
        let result = '';
        let d = 0;
        let m = 0;
        let y = 0;
        for (let i = 0; i < format.length; i++) {
            if (format[i] == 'D' && d < 2) result += this._day[d++];
            else if (format[i] == 'M' && m < 2) result += this._month[m++];
            else if (format[i] == 'Y' && y < 4) result += this._year[y++];   
            else result += format[i];
        }
        return result;
    }

    getStringMonth() {
        let monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        return monthNames[this._month - 1];
    }

    toString() {
        return this._day + ' ' + this.getStringMonth() + ' ' + this._year;
    }


    // not accurate implementation
    fromNow() {
        let result = '';
        let now = new Date(); 
        let deltadays = now.getDate() - this._day + (now.getMonth() + 1 - this._month) * 31 + (now.getFullYear() - this._year) * 365;
        console.log(now.getFullYear - this._year);
        let postfix = 'ago';
        if (deltadays < 0) {
            deltadays = -deltadays;
            postfix = 'before'
        }
        if (Math.trunc(deltadays / 365)) {
            result += Math.trunc(deltadays / 365) + ' year(s) ';
        }
        deltadays %= 365;
        if (Math.trunc(deltadays / 31)) {
            result += Math.trunc(deltadays / 31) + ' month(s) ';
        }
        deltadays %= 31;
        if (deltadays) {
            result += deltadays + ' day(s) ';
        }
        if (result == '') result = '0 days '
        result += postfix;
        return result;
    }
}

function Example(string, result) {
    let block = document.createElement('p');
    block.innerHTML = string + ' = ' + result; 
    return block;
}

let node = document.querySelector(".date-display-formatter");
node.appendChild(Example("new DateDisplayFormatter('31102011').formatTime('DD-MM-YYYY')", new DateDisplayFormatter('31102011').formatTime('DD-MM-YYYY')));
node.appendChild(Example("new DateDisplayFormatter('31102011')", new DateDisplayFormatter('31102011')));
node.appendChild(Example("new DateDisplayFormatter('20130431', 'YYYYMMDD')", new DateDisplayFormatter('20130431', 'YYYYMMDD')));
node.appendChild(Example("new DateDisplayFormatter('20130431', 'YYYYMMDD').formatTime('MM-DD-YYYY')", new DateDisplayFormatter('20130431', 'YYYYMMDD').formatTime('MM-DD-YYYY')));
node.appendChild(Example("new DateDisplayFormatter('2013-04-31', 'YYYY-MM-DD').fromNow()", new DateDisplayFormatter('2013-04-31', 'YYYY-MM-DD').fromNow()));
