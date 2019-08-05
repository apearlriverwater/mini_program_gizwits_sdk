"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function request(url, options) {
    return new Promise((res, ret) => {
        wx.request(Object.assign({ url }, options, { success: (data) => {
                res({ data: data.data, success: true });
            }, fail: (err) => {
                ret({ err, success: false });
            } }));
    });
}
exports.default = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxTQUF3QixPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU87SUFDMUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM5QixFQUFFLENBQUMsT0FBTyxpQkFDUixHQUFHLElBQUssT0FBTyxJQUNmLE9BQU8sRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNyQixHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQ0QsSUFBSSxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7Z0JBQ2pCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLElBQ0QsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQVpELDBCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXF1ZXN0cyBhIFVSTCwgcmV0dXJuaW5nIGEgcHJvbWlzZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybCAgICAgICBUaGUgVVJMIHdlIHdhbnQgdG8gcmVxdWVzdFxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgd2Ugd2FudCB0byBwYXNzIHRvIFwiZmV0Y2hcIlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgZWl0aGVyIFwiZGF0YVwiIG9yIFwiZXJyXCJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh1cmwsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJldCkgPT4ge1xuICAgIHd4LnJlcXVlc3QoeyBcbiAgICAgIHVybCwgLi4ub3B0aW9ucyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgcmVzKHsgZGF0YTogZGF0YS5kYXRhLCBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnI6IGFueSkgPT4ge1xuICAgICAgICByZXQoeyBlcnIsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=