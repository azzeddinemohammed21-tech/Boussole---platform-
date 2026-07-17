from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

# الأبعاد الثمانية لمؤشر BCI
DIMENSIONS = {
    'المعرفة': 15,
    'المهارة العملية': 20,
    'التفكير وحل المشكلات': 15,
    'السمات الشخصية': 10,
    'القيم المهنية': 10,
    'الدافعية': 10,
    'القدرة على التعلم': 10,
    'الإنجاز والتطبيق': 10
}

def calculate_bci(scores):
    """حساب مؤشر BCI بناءً على درجات المستخدم (من 0 إلى 10 لكل بعد)"""
    total = 0
    for dim, weight in DIMENSIONS.items():
        score = scores.get(dim, 0)
        total += (score / 10) * weight  # تحويل الدرجة إلى نسبة مئوية من الوزن
    return round(total, 2)

def get_competency_level(bci):
    """تحديد مستوى الكفاءة حسب قيمة BCI"""
    if bci <= 20:
        return "كفاءة كامنة (تحتاج إلى اكتشاف وبناء)"
    elif bci <= 40:
        return "كفاءة ناشئة (تحتاج إلى تدريب مكثف)"
    elif bci <= 60:
        return "كفاءة نامية (قادرة على أداء المهام الأساسية)"
    elif bci <= 80:
        return "كفاءة متقدمة (جاهزة لسوق العمل)"
    else:
        return "كفاءة قيادية (قادرة على الابتكار وقيادة الفرق)"

@app.route('/')
def index():
    return render_template('index.html', dimensions=DIMENSIONS)

@app.route('/calculate', methods=['POST'])
def calculate():
    scores = {}
    for dim in DIMENSIONS.keys():
        scores[dim] = float(request.form.get(dim, 0))
    
    bci = calculate_bci(scores)
    level = get_competency_level(bci)
    
    return jsonify({
        'bci': bci,
        'level': level,
        'dimensions': scores
    })

if __name__ == '__main__':
    app.run(debug=True)
