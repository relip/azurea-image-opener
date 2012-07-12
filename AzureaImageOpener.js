/*
* Copyright (C) 2012  Ji-hoon Kim
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str){
		return this.indexOf(str) == 0;
	};
}

System.addOpenUrlHandler(function(url){
	var Response	= Http.sendRequest(url, true);
	var ContentType	= Response.header;
	var arr 	= ContentType.split("\n");

	for(var i = 0; i < arr.length; i++)
	{
		var t = arr[i];
		if(t.startsWith("Content-Type"))
		{
			var Val = t.split(" ");
			if(Val.length > 1) // Content-Type: (null)
			{
				if(Val[1].startsWith("image/")) // image/*
				{
					return url;
				}
			}
		}
	}
});
