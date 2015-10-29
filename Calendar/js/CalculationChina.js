define(function(){ 
	//公历转换为农历
	function CnDateofDateStr(DateGL) {
        if (CnMonthofDate(DateGL) == "零月") return "　请调整您的计算机日期!";
        return /*""+ CnYearofDate(DateGL) + */"" + CnMonthofDate(DateGL) + CnDayofDate(DateGL);
    }
    function CnYearofDate(DateGL) {
        var YYYY = DateGL.getFullYear();
        var MM = DateGL.getMonth() + 1;
        var CnMM = parseInt(Math.abs(CnDateofDate(DateGL)) / 100);
        if (YYYY < 100) YYYY += 1900;
        if (CnMM > MM) YYYY--;
        YYYY -= 1864;
        return CnEra(YYYY) + "年";
    }
    function CnMonthofDate(DateGL) {
        var CnMonthStr = new Array("零", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊");
        var Month;
        Month = parseInt(CnDateofDate(DateGL) / 100);
        if (Month < 0) {
            return "闰" + CnMonthStr[-Month] + "月";
        }
        else {
            return CnMonthStr[Month] + "月";
        }
    }
    function CnDayofDate(DateGL) {
        var CnDayStr = new Array("零",
                "初一", "初二", "初三", "初四", "初五",
                "初六", "初七", "初八", "初九", "初十",
                "十一", "十二", "十三", "十四", "十五",
                "十六", "十七", "十八", "十九", "二十",
                "廿一", "廿二", "廿三", "廿四", "廿五",
                "廿六", "廿七", "廿八", "廿九", "三十");
        var Day;
        Day = (Math.abs(CnDateofDate(DateGL))) % 100;
        return CnDayStr[Day];
    }

    function CnDateofDate(DateGL) {
        var CnData = new Array(
                0x16, 0x2a, 0xda, 0x00, 0x83, 0x49, 0xb6, 0x05, 0x0e, 0x64, 0xbb, 0x00, 0x19, 0xb2, 0x5b, 0x00,
                0x87, 0x6a, 0x57, 0x04, 0x12, 0x75, 0x2b, 0x00, 0x1d, 0xb6, 0x95, 0x00, 0x8a, 0xad, 0x55, 0x02,
                0x15, 0x55, 0xaa, 0x00, 0x82, 0x55, 0x6c, 0x07, 0x0d, 0xc9, 0x76, 0x00, 0x17, 0x64, 0xb7, 0x00,
                0x86, 0xe4, 0xae, 0x05, 0x11, 0xea, 0x56, 0x00, 0x1b, 0x6d, 0x2a, 0x00, 0x88, 0x5a, 0xaa, 0x04,
                0x14, 0xad, 0x55, 0x00, 0x81, 0xaa, 0xd5, 0x09, 0x0b, 0x52, 0xea, 0x00, 0x16, 0xa9, 0x6d, 0x00,
                0x84, 0xa9, 0x5d, 0x06, 0x0f, 0xd4, 0xae, 0x00, 0x1a, 0xea, 0x4d, 0x00, 0x87, 0xba, 0x55, 0x04
        );
        var CnMonth = new Array();
        var CnMonthDays = new Array();
        var CnBeginDay;
        var LeapMonth;
        var Bytes = new Array();
        var I;
        var CnMonthData;
        var DaysCount;
        var CnDaysCount;
        var ResultMonth;
        var ResultDay;
        var yyyy = DateGL.getFullYear();
        var mm = DateGL.getMonth() + 1;
        var dd = DateGL.getDate();
        if (yyyy < 100) yyyy += 1900;
        if ((yyyy < 1997) || (yyyy > 2020)) {
            return 0;
        }
        Bytes[0] = CnData[(yyyy - 1997) * 4];
        Bytes[1] = CnData[(yyyy - 1997) * 4 + 1];
        Bytes[2] = CnData[(yyyy - 1997) * 4 + 2];
        Bytes[3] = CnData[(yyyy - 1997) * 4 + 3];
        if ((Bytes[0] & 0x80) != 0) {
            CnMonth[0] = 12;
        }
        else {
            CnMonth[0] = 11;
        }
        CnBeginDay = (Bytes[0] & 0x7f);
        CnMonthData = Bytes[1];
        CnMonthData = CnMonthData << 8;
        CnMonthData = CnMonthData | Bytes[2];
        LeapMonth = Bytes[3];
        for (I = 15; I >= 0; I--) {
            CnMonthDays[15 - I] = 29;
            if (((1 << I) & CnMonthData) != 0) {
                CnMonthDays[15 - I]++;
            }
            if (CnMonth[15 - I] == LeapMonth) {
                CnMonth[15 - I + 1] = -LeapMonth;
            }
            else {
                if (CnMonth[15 - I] < 0) {
                    CnMonth[15 - I + 1] = -CnMonth[15 - I] + 1;
                }
                else {
                    CnMonth[15 - I + 1] = CnMonth[15 - I] + 1;
                }
                if (CnMonth[15 - I + 1] > 12) {
                    CnMonth[15 - I + 1] = 1;
                }
            }
        }
        DaysCount = DaysNumberofDate(DateGL) - 1;
        if (DaysCount <= (CnMonthDays[0] - CnBeginDay)) {
            if ((yyyy > 1901) && (CnDateofDate(new Date((yyyy - 1) + "/12/31")) < 0)) {
                ResultMonth = -CnMonth[0];
            }
            else {
                ResultMonth = CnMonth[0];
            }
            ResultDay = CnBeginDay + DaysCount;
        }
        else {
            CnDaysCount = CnMonthDays[0] - CnBeginDay;
            I = 1;
            while ((CnDaysCount < DaysCount) && (CnDaysCount + CnMonthDays[I] < DaysCount)) {
                CnDaysCount += CnMonthDays[I];
                I++;
            }
            ResultMonth = CnMonth[I];
            ResultDay = DaysCount - CnDaysCount;
        }
        if (ResultMonth > 0) {
            return ResultMonth * 100 + ResultDay;
        }
        else {
            return ResultMonth * 100 - ResultDay;
        }
    }

    function DaysNumberofDate(DateGL) {
        return parseInt((Date.parse(DateGL) - Date.parse(DateGL.getFullYear() + "/1/1")) / 86400000) + 1;
    }

    function CnEra(YYYY) {
        var Tiangan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
//var Dizhi=new Array("子(鼠)","丑(牛)","寅(虎)","卯(兔)","辰(龙)","巳(蛇)",
        //"午(马)","未(羊)","申(猴)","酉(鸡)","戌(狗)","亥(猪)");
        var Dizhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
        return Tiangan[YYYY % 10] + Dizhi[YYYY % 12];
    }



    return CnDateofDateStr;
});